package com.bangur

import android.content.Context
import java.io.IOException
import okhttp3.CertificatePinner
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.Response
import okhttp3.logging.HttpLoggingInterceptor

class SSLPinningClient(context: Context) {
    private val client: OkHttpClient

    init {
        val hostname = "apisheecementuat.mjunction.in"

        val certificatePinner =
                CertificatePinner.Builder()
                        .add(hostname, "sha256/HYVBbIEdyjkQhisEE7VP4VzVN//qb+kLy96tAtrzFLY=")
                        .add(hostname, "sha256/SDG5orEv8iX6MNenIAxa8nQFNpROB/6+llsZdXHZNqs=")
                        .add(hostname, "sha256/i7WTqTvh0OioIruIfFR4kMPnBqrS2rdiVPl/s2uC/CY=")
                        .build()

        client =
                OkHttpClient.Builder()
                        .certificatePinner(certificatePinner)
                        .addInterceptor(
                                HttpLoggingInterceptor().apply {
                                    level = HttpLoggingInterceptor.Level.BODY
                                }
                        )
                        .build()
    }

    @Throws(IOException::class)
    fun makeRequest(url: String): Response {
        val request = Request.Builder().url(url).build()
        return client.newCall(request).execute()
    }
}
