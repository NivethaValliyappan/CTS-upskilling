import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class BasicJDBC {

    public static void main(String[] args) {

        try {

            // Load JDBC Driver
            Class.forName("com.mysql.cj.jdbc.Driver");

            // Create Connection
            Connection con = DriverManager.getConnection(
                    "jdbc:mysql://localhost:3306/studentdb",
                    "root",
                    "password");

            // Create Statement
            Statement stmt = con.createStatement();

            // Execute SELECT Query
            ResultSet rs = stmt.executeQuery("SELECT * FROM students");

            // Display Results
            while (rs.next()) {
                System.out.println("ID: " + rs.getInt("id"));
                System.out.println("Name: " + rs.getString("name"));
                System.out.println("Age: " + rs.getInt("age"));
                System.out.println();
            }

            // Close Connection
            con.close();

        } catch (Exception e) {
            System.out.println(e);
        }
    }
}