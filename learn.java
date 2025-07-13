
import java.util.Scanner;

public class learn {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // print sum of n number
        // int n = sc.nextInt();
        // int sum = 0;
        // for (int i = 1; i <= n; i++) {
        //     sum = sum + i;
        // }
        // System.out.println("sum of n number is :" + sum);

        // print factorial of a number
        // int n = sc.nextInt();
        // int f = 1;
        // for (int i = 1; i <= n; i++) {
        //     f = f * i;
        // }
        // System.out.println("factorial is :" + f);
        // print a reverse of input user number
        // int n = sc.nextInt();
        // int lastdigit;
        // while (n > 0) {
        //     lastdigit = n % 10;
        //     System.out.print(lastdigit);
        //     n = n / 10;
        // }
        // reverse by given number 
        // int n = sc.nextInt();
        // int lastdigit;
        // int rev = 0;
        // while (n > 0) {
        //     lastdigit = n % 10;
        //     rev = (rev * 10) + lastdigit;
        //     System.out.println("rev is :" + rev);
        //     n = n / 10;
        // }
        // Basic patterns square
        // int n = sc.nextInt();
        // for (int i = 1; i <= n; i++) {
        //     for (int j = 1; j <= n; j++) {
        //         System.out.print("*");
        //     }
        //     System.out.println(" ");
        // }
        // star pattern
        // int n = sc.nextInt();
        // for (int i = 1; i <= n; i++) {
        //     for (int j = 1; j <= i; j++) {
        //         System.out.print("*");
        //     }
        //     System.out.println(" ");
        // }
        // holo reverse
        // int n = sc.nextInt();
        // for (int i = 1; i <= n; i++) {
        //     for (int j = 1; j <= n; j++) {
        //         if (i + j <= n + 1) {
        //             System.out.print("*");
        //         }
        //     }
        //     System.out.println("");
        // }
        // int n = sc.nextInt(); // Ensure Scanner object is initialized before this line
        // for (int i = 1; i <= n; i++) {
        //     for (int j = 1; j <= i; j++) {
        //         if (i + j <= n + 1) {
        //             System.out.print("*");
        //         }
        //     }
        //     System.out.println("");
        // }
        // 1,12,123,1234 pattern wala 
        // int n = sc.nextInt();
        // int count = 1;
        // for (int i = 1; i <= n; i++) {
        //     for (int j = 1; j <= i; j++) {
        //         System.out.print(j);
        //     }
        //     System.out.println("");
        // }
        // pattern of charcter like A,BC,CDE,FGHI
        int n = sc.nextInt();
        char c = 'A';
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print(c);
                c++;

            }
            System.out.println("");

        }

    }
}
