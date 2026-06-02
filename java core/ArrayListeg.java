import java.util.ArrayList;
import java.util.Scanner;

public class ArrayListeg {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        ArrayList<String> students = new ArrayList<>();

        System.out.print("Enter the number of students: ");
        int n = sc.nextInt();
        sc.nextLine();

        for (int i = 0; i < n; i++) {
            System.out.print("Enter student name: ");
            students.add(sc.nextLine());
        }

        System.out.println("\nStudent Names:");

        for (String name : students) {
            System.out.println(name);
        }
    }
}