import java.sql.*;

class StudentDAO {

    Connection con;

    StudentDAO() {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");

            con = DriverManager.getConnection(
                    "jdbc:mysql://localhost:3306/studentdb",
                    "root",
                    "password");

        } catch (Exception e) {
            System.out.println(e);
        }
    }

    public void insertStudent(int id, String name, int age) {
        try {
            String sql = "INSERT INTO students VALUES (?, ?, ?)";

            PreparedStatement ps = con.prepareStatement(sql);

            ps.setInt(1, id);
            ps.setString(2, name);
            ps.setInt(3, age);

            ps.executeUpdate();

            System.out.println("Student inserted successfully");

        } catch (Exception e) {
            System.out.println(e);
        }
    }

    public void updateStudent(int id, String name, int age) {
        try {
            String sql = "UPDATE students SET name=?, age=? WHERE id=?";

            PreparedStatement ps = con.prepareStatement(sql);

            ps.setString(1, name);
            ps.setInt(2, age);
            ps.setInt(3, id);

            ps.executeUpdate();

            System.out.println("Student updated successfully");

        } catch (Exception e) {
            System.out.println(e);
        }
    }
}

public class optJDBC {

    public static void main(String[] args) {

        StudentDAO dao = new StudentDAO();

        dao.insertStudent(1, "Alice", 20);

        dao.updateStudent(1, "Alice Johnson", 21);
    }
}