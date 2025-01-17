public class CartItem {
  private int id;
  private String title;
  private double price;
  private int quantity;
  private String imageUrl;

  public CartItem(int id, String title, double price, int quantity, String imageUrl) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.quantity = quantity;
    this.imageUrl = imageUrl;
  }

  // Getters and setters for the CartItem fields
  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public double getPrice() {
    return price;
  }

  public void setPrice(double price) {
    this.price = price;
  }

  public int getQuantity() {
    return quantity;
  }

  public void setQuantity(int quantity) {
    this.quantity = quantity;
  }

  public String getImageUrl() {
    return imageUrl;
  }

  public void setImageUrl(String imageUrl) {
    this.imageUrl = imageUrl;
  }
}
