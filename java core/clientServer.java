import java.io.*;
import java.net.*;
import java.util.Scanner;

public class clientServer {

    public static void main(String[] args) {

        try {

            Socket socket = new Socket("localhost", 5000);

            DataInputStream in =
                    new DataInputStream(socket.getInputStream());

            DataOutputStream out =
                    new DataOutputStream(socket.getOutputStream());

            Scanner sc = new Scanner(System.in);

            String msg = "";

            while (!msg.equalsIgnoreCase("exit")) {

                System.out.print("Client: ");
                msg = sc.nextLine();

                out.writeUTF(msg);

                if (msg.equalsIgnoreCase("exit"))
                    break;

                String reply = in.readUTF();

                System.out.println("Server: " + reply);
            }

            socket.close();

        } catch (Exception e) {
            System.out.println(e);
        }
    }
}