import java.util.Scanner;

public class NumberGuess {
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        int num=(int)(Math.random()*100)+1;
        int a=0;
        while(num!=a){
            a=sc.nextInt();
            if(a<num){
                System.out.println("Higher");

            }if(a>num){
                System.out.println("Lower");


            }
        }
        System.out.println(a+"Correctly guessed");
    }
}
