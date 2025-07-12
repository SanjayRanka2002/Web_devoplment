
import java.util.Scanner;

public class learn {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // int n = sc.nextInt();
        // for (int i = 1; i <= n; i++) {
        //     for (int j = 1; j <= n; j++) {
        //         System.out.print("*");

        //     }
        //     System.out.println("");
        // }
        int n = sc.nextInt();
        int lastdigit;
        while (n > 0) {
            lastdigit = n % 10;
            System.out.print(lastdigit);
            n = n / 10;

        }

    }
}
