
import java.util.Scanner;

public class practise {

    //function of sum of n
    public static int sum(int n) {
        int sum = 0;
        for (int i = 1; i <= n; i++) {
            sum = sum + i;

        }
        return sum;
    }

    //function of factorial
    public static int factorial(int n) {
        int f = 1;
        for (int i = 1; i <= n; i++) {
            f = f * i;
        }
        return f;

    }
    //bionomial theorem 

    public static int bionomial(int n, int r) {
        int a = factorial(n);
        int b = factorial(r);
        int c = factorial(n - r);
        int bionomial = a / (b * c);
        return bionomial;
    }

    //function of prime and range of prime 
    public static boolean isprime(int n) {
        if (n == 2) {
            System.out.println("always prime");

        }
        for (int i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) {
                return false;

            }

        }
        return true;
    }

    public static void range(int n) {
        for (int i = 2; i <= n; i++) {
            if (isprime(i)) {
                System.out.println(i + " ");

            }

        }

    }

    //function of reverse number
    public static void reverse(int n) {
        int lastdigit;
        while (n > 0) {
            lastdigit = n % 10;
            System.out.print(lastdigit);
            n = n / 10;

        }
    }

    public static int rev(int n) {
        int lastdigit;
        int rev = 0;
        while (n > 0) {
            lastdigit = n % 10;
            rev = (rev * 10) + lastdigit;
            System.out.println("rev is :" + rev);
            n = n / 10;

        }
        return rev;

    }
    //binary to decimal

    public static void decimal(int n) {
        int mynum = n;
        int pow = 0;
        int lastdigit;
        int dec = 0;
        while (n > 0) {
            lastdigit = n % 10;
            dec = dec + (int) (lastdigit * Math.pow(2, pow));
            pow++;
            n = n / 10;

        }
        System.out.println("decimal number is :" + mynum + " = " + dec);
    }

    public static void calculator() {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        char operator = sc.next().charAt(0);
        int b = sc.nextInt();

        switch (operator) {
            case '+':
                System.out.println("sum of number is = " + (a + b));
                break;
            case '-':
                System.out.println("sub of number is = " + (a - b));
                break;
            case '*':
                System.out.println("mul of number is = " + (a * b));
                break;
            case '/':
                if (b == 0) {
                    System.out.println("infinite value");

                }
                System.out.println("div of number is = " + (a / b));
                break;

            default:
                System.out.println("plese write some valid operator");
                break;
        }
    }

    //patterns 
    public static void pattern1(int n) {
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n; j++) {
                System.out.print("*");

            }
            System.out.println("");

        }
    }

    public static void pattern2(int n) {
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n; j++) {
                System.out.print(i);

            }

            System.out.println("");
        }

    }

    public static void pattern3(int n) {
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n; j++) {
                System.out.print(j);

            }

            System.out.println("");
        }

    }

    public static void pattern4(int n) {
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print("*");

            }

            System.out.println("");
        }

    }

    public static void pattern5(int n) {
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print(i);

            }

            System.out.println("");
        }

    }

    public static void pattern6(int n) {
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print(j);

            }

            System.out.println("");
        }

    }

    public static void pattern7(int n) {
        int count = 1;
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print(count);
                count++;

            }

            System.out.println("");
        }

    }

    public static void pattern8(int n) {
        char ch = 'A';
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print(ch);
                ch++;

            }

            System.out.println("");
        }

    }

    public static void pattern9(int n) {
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n; j++) {
                if (i + j <= n + 1) {
                    System.out.print("*");
                }
            }

            System.out.println("");
        }

    }
    //incomplete pattern

    public static void pattern10(int n) {
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n; j++) {
                if (i + j >= n + 1) {
                    System.out.print("*");

                }

            }
            for (int j = 1; j <= n; j++) {
                if (i + j <= n) {
                    System.out.print("");

                }

            }

            System.out.println("");
        }

    }

    public static void main(String[] args) {

        // int sum = sum(5);
        // System.out.println("sum is =" + sum);
        // int f = factorial(5);
        // System.out.println("factorial is :" + f);
        // System.out.println(isprime(4));
        // range(7);
        // int bionomial = bionomial(5, 3);
        // System.out.println("bionomial is=" + bionomial);
        // reverse(389);
        // int rev = rev(179);
        // System.out.println(rev);
        decimal(292);
        // calculator();
        //pattern1(5);
        // pattern2(5);
        //pattern3(5);
        //pattern4(5);
        //pattern5(5);
        //pattern6(5);
        //pattern7(5);
        //pattern8(5);
        //pattern9(5);
    }
}
