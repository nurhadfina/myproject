import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpExchange;

import java.io.*;
import java.net.URI;
import java.util.*;

public class CartHandler implements HttpHandler {
  private static final List<CartItem> cartItems = new ArrayList<>();

  @Override
  public void handle(HttpExchange exchange) throws IOException {
    String method = exchange.getRequestMethod();
    URI uri = exchange.getRequestURI();
    String response = "";

    // Add CORS headers
    exchange.getResponseHeaders().add("Access-Control-Allow-Origin", "*");
    exchange.getResponseHeaders().add("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    exchange.getResponseHeaders().add("Access-Control-Allow-Headers", "Content-Type");

    // Handle OPTIONS request
    if ("OPTIONS".equals(method)) {
      exchange.sendResponseHeaders(204, -1); // No Content
      return;
    }

    // Handle other methods
    System.out.println("Received request: " + method + " " + uri.getPath());
    if ("GET".equals(method)) {
      if (uri.getPath().equals("/api/cart")) {
        response = getCartItems();
        exchange.sendResponseHeaders(200, response.getBytes().length);
      }
    } else if ("POST".equals(method)) {
      if (uri.getPath().equals("/api/cart")) {
        InputStream requestBody = exchange.getRequestBody();
        String requestData = new String(requestBody.readAllBytes());
        System.out.println("Request data: " + requestData);
        addCartItem(requestData);
        response = getCartItems();
        exchange.sendResponseHeaders(201, response.getBytes().length); // 201 Created
      }
    } else if ("PUT".equals(method)) {
      if (uri.getPath().equals("/api/cart/update")) {
        InputStream requestBody = exchange.getRequestBody();
        String requestData = new String(requestBody.readAllBytes());
        System.out.println("Request data: " + requestData);
        updateCartItem(requestData);
        response = getCartItems();
        exchange.sendResponseHeaders(200, response.getBytes().length);
      }
    } else if ("DELETE".equals(method)) {
      String[] pathParts = uri.getPath().split("/");
      if (pathParts.length == 4 && pathParts[3].matches("\\d+")) {
        int itemId = Integer.parseInt(pathParts[3]);
        removeCartItem(itemId);
        response = getCartItems();
        exchange.sendResponseHeaders(200, response.getBytes().length);
      }
    } else {
      exchange.sendResponseHeaders(404, -1); // 404 Not Found for unsupported paths
    }

    // Send the response
    try (OutputStream os = exchange.getResponseBody()) {
      os.write(response.getBytes());
    }
    System.out.println("Response sent: " + response);
  }

  private String getCartItems() {
    StringBuilder sb = new StringBuilder();
    sb.append("[");
    for (int i = 0; i < cartItems.size(); i++) {
      CartItem item = cartItems.get(i);
      sb.append(String.format(
          "{\"id\":%d,\"title\":\"%s\",\"price\":%.2f,\"quantity\":%d,\"imageUrl\":\"%s\"}",
          item.getId(), item.getTitle(), item.getPrice(), item.getQuantity(), item.getImageUrl()));
      if (i < cartItems.size() - 1) {
        sb.append(",");
      }
    }
    sb.append("]");
    return sb.toString();
  }

  private void addCartItem(String requestData) {
    String[] parts = requestData.replace("{", "").replace("}", "").split(",");
    int id = Integer.parseInt(parts[0].split(":")[1].trim());
    String title = parts[1].split(":")[1].trim().replace("\"", "");
    double price = Double.parseDouble(parts[2].split(":")[1].trim());
    int quantity = Integer.parseInt(parts[3].split(":")[1].trim());
    String imageUrl = parts[4].split(":")[1].trim().replace("\"", "");

    // Check if the item already exists
    for (CartItem item : cartItems) {
      if (item.getId() == id) {
        item.setQuantity(item.getQuantity() + quantity);
        return;
      }
    }

    // Add a new item if it doesn't exist
    cartItems.add(new CartItem(id, title, price, quantity, imageUrl));
  }

  private void updateCartItem(String requestData) {
    String[] parts = requestData.replace("{", "").replace("}", "").split(",");
    int itemId = Integer.parseInt(parts[0].split(":")[1].trim());
    int quantity = Integer.parseInt(parts[1].split(":")[1].trim());

    for (CartItem item : cartItems) {
      if (item.getId() == itemId) {
        item.setQuantity(quantity);
        break;
      }
    }
  }

  private void removeCartItem(int itemId) {
    cartItems.removeIf(item -> item.getId() == itemId);
  }
}
