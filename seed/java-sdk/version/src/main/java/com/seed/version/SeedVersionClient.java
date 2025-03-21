/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.version;

import com.seed.version.core.ClientOptions;
import com.seed.version.core.Suppliers;
import com.seed.version.resources.user.UserClient;
import java.util.function.Supplier;

public class SeedVersionClient {
    protected final ClientOptions clientOptions;

    protected final Supplier<UserClient> userClient;

    public SeedVersionClient(ClientOptions clientOptions) {
        this.clientOptions = clientOptions;
        this.userClient = Suppliers.memoize(() -> new UserClient(clientOptions));
    }

    public UserClient user() {
        return this.userClient.get();
    }

    public static SeedVersionClientBuilder builder() {
        return new SeedVersionClientBuilder();
    }
}
