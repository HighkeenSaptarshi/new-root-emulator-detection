package com.bangur

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class SSLPinningModule(reactContext: ReactApplicationContext) :
        ReactContextBaseJavaModule(reactContext) {

    private val sslClient = SSLPinningClient(reactContext)

    override fun getName(): String {
        return "SSLPinning"
    }

    @ReactMethod
    fun makeRequest(url: String, promise: Promise) {
        try {
            val response = sslClient.makeRequest(url)
            promise.resolve(response.body?.string())
        } catch (e: Exception) {
            promise.reject("ERROR", e.message)
        }
    }
}
