import com.sun.net.httpserver.HttpServer;
import com.sun.net.httpserver.HttpContext;
import java.net.InetSocketAddress;

public class CartServer {
  public static void main(String[] args) {
    int port = args.length > 0 ? Integer.parseInt(args[0]) : 8080; // Configurable port
    try {
      // Create a new HTTP server on the specified port
      HttpServer server = HttpServer.create(new InetSocketAddress(port), 0);

      // Set up context for handling API requests
      HttpContext context = server.createContext("/api/cart", new CartHandler());

      // Set up a thread pool for handling requests
      server.setExecutor(java.util.concurrent.Executors.newCachedThreadPool());

      // Start the server
      server.start();
      System.out.printf("Server is running on http://localhost:%d%n", port);

      // Add a shutdown hook to stop the server gracefully
      Runtime.getRuntime().addShutdownHook(new Thread(() -> {
        System.out.println("Shutting down the server...");
        server.stop(0);
        System.out.println("Server stopped.");
      }));

    } catch (Exception e) {
      System.err.println("Error starting the server: " + e.getMessage());
      e.printStackTrace();
    }
  }
}
