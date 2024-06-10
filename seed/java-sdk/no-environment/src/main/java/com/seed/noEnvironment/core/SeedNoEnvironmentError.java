/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.noEnvironment.core;

/**
 * This class serves as the base exception for all errors in the SDK.
 */
public class SeedNoEnvironmentError extends RuntimeException {
    public SeedNoEnvironmentError(String message) {
        super(message);
    }

    public SeedNoEnvironmentError(String message, Exception e) {
        super(message, e);
    }
}