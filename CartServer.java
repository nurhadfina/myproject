import com.sun.net.httpserver.HttpServer;
import com.sun.net.httpserver.HttpContext;
import java.net.InetSocketAddress;

public class CartServer {
  public static void main(String[] args) throws Exception {
    // Create a new HTTP server on port 8080
    HttpServer server = HttpServer.create(new InetSocketAddress(8080), 0);

    // Set up context for handling API requests
    HttpContext context = server.createContext("/api/cart", new CartHandler());

    // Start the server
    server.start();
    System.out.println("Server is running on http://localhost:8080");
  }
}
