import java.io.*;
import java.util.Scanner;

public class Calculator {
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        int a=sc.nextInt();
        int b=sc.nextInt();
        System.out.println("Choose Operation (+,-,*,/)");
        char opt=sc.next().charAt(0);
        int res=0;
        switch (opt){
            case '+':
                res=a+b;
                break;
            case '-':
                res=a-b;
                break;
            case '*':
                res=a*b;
                break;
            case '/':
                if(b!=0){
                    res=a/b;
                }else{
                    System.out.println("Error:Division by Zero error");
                }
                break;
            default:
                System.out.println("Error:Invalid Operator");
                return;
        }
        System.out.println(res);

    }
}
