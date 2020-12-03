package com.purunative;

import android.os.Build;
import android.provider.Settings;
import android.widget.Toast;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class CustomModule extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;

    CustomModule(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }

    @ReactMethod
    public void show(){
        Toast.makeText(reactContext , "Hi from Android", Toast.LENGTH_SHORT).show();
    }

    @ReactMethod
    public void getDeviceId(Promise promise){
        try{
            String android_id = Settings.Secure.getString(reactContext.getContentResolver(),Settings.Secure.ANDROID_ID);
            promise.resolve(android_id);
        }catch (Exception e) {
            promise.reject("Error",e);
        }
    }

    @ReactMethod
    public boolean isEmulator(){
        return  (Build.FINGERPRINT.startsWith("generic")
                && Build.FINGERPRINT.endsWith(":user/release-keys")
                && Build.MANUFACTURER == "Google"
                && Build.PRODUCT.startsWith("sdk_gphone_")
                && Build.BRAND == "google"
                && Build.MODEL.startsWith("sdk_gphone_"))
                || Build.FINGERPRINT.startsWith("unknown")
                || Build.MODEL.contains("google_sdk")
                || Build.MODEL.contains("Emulator")
                || Build.HOST.startsWith("Build")
                || Build.BRAND.startsWith("generic") && Build.DEVICE.startsWith("generic")
                || Build.PRODUCT == "google_sdk"
                || "QC_Reference_Phone" == Build.BOARD
                || Build.MODEL.contains("Android SDK built for x86")
                || Build.MANUFACTURER.contains("Genymotion")
                || (Build.BRAND.startsWith("generic") && Build.DEVICE.startsWith("generic"))
                || "google_sdk".equals(Build.PRODUCT);
    }

    @NonNull
    @Override
    public String getName() {
        return "ABC";
    }
}
