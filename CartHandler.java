import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpExchange;
import java.io.*;
import java.net.URI;
import java.util.*;

public class CartHandler implements HttpHandler {
  // In-memory storage for cart items
  private static final List<CartItem> cartItems = new ArrayList<>();

  static {
    // Adding some initial items to the cart
    cartItems.add(new CartItem(1, "Green Tea", 31.0, 1, "https://example.com/green-tea.jpg"));
    cartItems.add(new CartItem(2, "Black Coffee", 20.0, 1, "https://example.com/black-coffee.jpg"));
  }

  @Override
  public void handle(HttpExchange exchange) throws IOException {
    String method = exchange.getRequestMethod();
    URI uri = exchange.getRequestURI();
    String response = "";

    // Handle GET request
    if ("GET".equals(method)) {
      if (uri.getPath().equals("/api/cart")) {
        response = getCartItems();
        exchange.sendResponseHeaders(200, response.getBytes().length);
      }
    }

    // Handle PUT request
    else if ("PUT".equals(method)) {
      if (uri.getPath().equals("/api/cart/update")) {
        InputStream requestBody = exchange.getRequestBody();
        String requestData = new String(requestBody.readAllBytes());
        updateCartItem(requestData);
        response = getCartItems();
        exchange.sendResponseHeaders(200, response.getBytes().length);
      }
    }

    // Handle DELETE request
    else if ("DELETE".equals(method)) {
      String[] pathParts = uri.getPath().split("/");
      if (pathParts.length == 4 && pathParts[3].matches("\\d+")) {
        int itemId = Integer.parseInt(pathParts[3]);
        removeCartItem(itemId);
        response = getCartItems();
        exchange.sendResponseHeaders(200, response.getBytes().length);
      }
    }

    // Send the response
    try (OutputStream os = exchange.getResponseBody()) {
      os.write(response.getBytes());
    }
  }

  private String getCartItems() {
    StringBuilder sb = new StringBuilder();
    sb.append("[");
    for (int i = 0; i < cartItems.size(); i++) {
      CartItem item = cartItems.get(i);
      sb.append(String.format("{\"id\":%d,\"title\":\"%s\",\"price\":%.2f,\"quantity\":%d,\"imageUrl\":\"%s\"}",
          item.getId(), item.getTitle(), item.getPrice(), item.getQuantity(), item.getImageUrl()));
      if (i < cartItems.size() - 1) {
        sb.append(",");
      }
    }
    sb.append("]");
    return sb.toString();
  }

  private void updateCartItem(String requestData) {
    // Example JSON: {"id":1,"quantity":2}
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
