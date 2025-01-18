import java.io.Serializable;
import java.util.Objects;

public class CartItem implements Serializable {
  private static final long serialVersionUID = 1L;

  private int id;
  private String title;
  private double price;
  private int quantity;
  private String imageUrl;

  public CartItem(int id, String title, double price, int quantity, String imageUrl) {
    if (price < 0)
      throw new IllegalArgumentException("Price cannot be negative");
    if (quantity < 0)
      throw new IllegalArgumentException("Quantity cannot be negative");

    this.id = id;
    this.title = title;
    this.price = price;
    this.quantity = quantity;
    this.imageUrl = imageUrl;
  }

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
    if (price < 0)
      throw new IllegalArgumentException("Price cannot be negative");
    this.price = price;
  }

  public int getQuantity() {
    return quantity;
  }

  public void setQuantity(int quantity) {
    if (quantity < 0)
      throw new IllegalArgumentException("Quantity cannot be negative");
    this.quantity = quantity;
  }

  public String getImageUrl() {
    return imageUrl;
  }

  public void setImageUrl(String imageUrl) {
    this.imageUrl = imageUrl;
  }

  @Override
  public boolean equals(Object obj) {
    if (this == obj)
      return true;
    if (obj == null || getClass() != obj.getClass())
      return false;
    CartItem cartItem = (CartItem) obj;
    return id == cartItem.id;
  }

  @Override
  public int hashCode() {
    return Objects.hash(id);
  }

  @Override
  public String toString() {
    return String.format("CartItem{id=%d, title='%s', price=%.2f, quantity=%d, imageUrl='%s'}",
        id, title, price, quantity, imageUrl);
  }
}
