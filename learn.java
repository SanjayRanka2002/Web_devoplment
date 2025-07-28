
import java.util.Scanner;

public class learn {

    public static void decimal(int n) {
        int binary = n;
        int pow = 0;
        int dec = 0;
        int lastdigit;

        while (n > 0) {
            lastdigit = n % 10;
            dec = dec + (int) (lastdigit * Math.pow(2, pow));
            n = n / 10;
            pow++;

        }

        System.out.println("my binary is :" + binary + " and decimal is :" + dec);

    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        decimal(n);

    }
}
