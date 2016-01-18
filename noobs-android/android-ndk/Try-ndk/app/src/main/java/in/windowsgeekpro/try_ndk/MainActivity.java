package in.windowsgeekpro.try_ndk;

import android.app.Activity;
import android.widget.TextView;
import android.os.Bundle;


public class MainActivity extends Activity
{
    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);

        /* Create a TextView and set its content.
         * the text is retrieved by calling a native
         * function.
         */
        TextView  tv = new TextView(this);
        tv.setText( stringFromJNI() );
        setContentView(tv);
    }

    public native String stringFromJNI();

    public native String unimplementedStringFromJNI();

    static {
        System.loadLibrary("Try-ndk");
    }
}

