public class OperatorPrec {
    public static void main(String[] args){
        int res=10+5*2;
        System.out.println(res);
        System.out.println("Using PEMDAS rule  " +
                "--* higher preference (5*2=10)" +
                "Then --+ operator (10+10=20)"
        );
    }
}
