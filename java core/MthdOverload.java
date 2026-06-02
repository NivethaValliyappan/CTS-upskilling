class adding{
    void add(int a,int b){
        int res=a+b;
        System.out.println(res);
    }

    void add(double a,double b){
        double res=a+b;
        System.out.println(res);
    }
    void add(int a,int b,int c){
        int res=a+b+c;
        System.out.println(res);
    }
}
public class MthdOverload {
    public static void main(String[] args){
        adding ab=new adding();
        ab.add(5,7);
        ab.add(15.3,65.2);
        ab.add(5,9,8);




    }
}
