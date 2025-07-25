
public class learn {

    public static void find(int array[]) {
        int first = 0;
        int last = array.length - 1;
        while (first < last) {
            int temp = array[last];
            array[last] = array[first];
            array[first] = temp;
            first++;
            last--;

        }

    }

    public static void main(String[] args) {
        int array[] = {1, 2, 3, 4, 5};
        find(array);
        for (int i = 0; i < array.length; i++) {
            System.out.print(array[i] + " ");

        }
        System.out.println("");

    }
}
