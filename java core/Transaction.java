import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

public class Transaction{

    public static void main(String[] args) {

        try {

            Class.forName("com.mysql.cj.jdbc.Driver");

            Connection con = DriverManager.getConnection(
                    "jdbc:mysql://localhost:3306/bankdb",
                    "root",
                    "password");

            con.setAutoCommit(false);

            int fromAccount = 1;
            int toAccount = 2;
            double amount = 1000;

            String debitQuery =
                    "UPDATE accounts SET balance = balance - ? WHERE account_id = ?";

            PreparedStatement debitStmt =
                    con.prepareStatement(debitQuery);

            debitStmt.setDouble(1, amount);
            debitStmt.setInt(2, fromAccount);

            debitStmt.executeUpdate();

            String creditQuery =
                    "UPDATE accounts SET balance = balance + ? WHERE account_id = ?";

            PreparedStatement creditStmt =
                    con.prepareStatement(creditQuery);

            creditStmt.setDouble(1, amount);
            creditStmt.setInt(2, toAccount);

            creditStmt.executeUpdate();

            con.commit();

            System.out.println("Transaction Successful");

            con.close();

        } catch (Exception e) {

            System.out.println("Transaction Failed");
            System.out.println(e);
        }
    }
}