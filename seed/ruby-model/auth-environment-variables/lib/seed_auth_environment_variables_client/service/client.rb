# frozen_string_literal: true

require_relative "../../requests"
require "json"
require "async"

module SeedAuthEnvironmentVariablesClient
  class ServiceClient
    # @return [SeedAuthEnvironmentVariablesClient::RequestClient]
    attr_reader :request_client

    # @param request_client [SeedAuthEnvironmentVariablesClient::RequestClient]
    # @return [SeedAuthEnvironmentVariablesClient::ServiceClient]
    def initialize(request_client:)
      @request_client = request_client
    end

    # GET request with custom api key
    #
    # @param request_options [SeedAuthEnvironmentVariablesClient::RequestOptions]
    # @return [String]
    def get_with_api_key(request_options: nil)
      response = @request_client.conn.get do |req|
        req.options.timeout = request_options.timeout_in_seconds unless request_options&.timeout_in_seconds.nil?
        req.headers["X-FERN-API-KEY"] = request_options.api_key unless request_options&.api_key.nil?
        req.headers["X-Another-Header"] = request_options.x_another_header unless request_options&.x_another_header.nil?
        req.headers = { **req.headers, **(request_options&.additional_headers || {}) }.compact
        req.url "#{@request_client.get_url(request_options: request_options)}/apiKey"
      end
      JSON.parse(response.body)
    end

    # GET request with custom api key
    #
    # @param x_endpoint_header [String]
    # @param request_options [SeedAuthEnvironmentVariablesClient::RequestOptions]
    # @return [String]
    def get_with_header(x_endpoint_header:, request_options: nil)
      response = @request_client.conn.get do |req|
        req.options.timeout = request_options.timeout_in_seconds unless request_options&.timeout_in_seconds.nil?
        req.headers["X-FERN-API-KEY"] = request_options.api_key unless request_options&.api_key.nil?
        req.headers["X-Another-Header"] = request_options.x_another_header unless request_options&.x_another_header.nil?
        req.headers = {
          **req.headers,
          **(request_options&.additional_headers || {}),
          "X-Endpoint-Header": x_endpoint_header
        }.compact
        req.url "#{@request_client.get_url(request_options: request_options)}/apiKeyInHeader"
      end
      JSON.parse(response.body)
    end
  end

  class AsyncServiceClient
    # @return [SeedAuthEnvironmentVariablesClient::AsyncRequestClient]
    attr_reader :request_client

    # @param request_client [SeedAuthEnvironmentVariablesClient::AsyncRequestClient]
    # @return [SeedAuthEnvironmentVariablesClient::AsyncServiceClient]
    def initialize(request_client:)
      @request_client = request_client
    end

    # GET request with custom api key
    #
    # @param request_options [SeedAuthEnvironmentVariablesClient::RequestOptions]
    # @return [String]
    def get_with_api_key(request_options: nil)
      Async do
        response = @request_client.conn.get do |req|
          req.options.timeout = request_options.timeout_in_seconds unless request_options&.timeout_in_seconds.nil?
          req.headers["X-FERN-API-KEY"] = request_options.api_key unless request_options&.api_key.nil?
          unless request_options&.x_another_header.nil?
            req.headers["X-Another-Header"] =
              request_options.x_another_header
          end
          req.headers = { **req.headers, **(request_options&.additional_headers || {}) }.compact
          req.url "#{@request_client.get_url(request_options: request_options)}/apiKey"
        end
        parsed_json = JSON.parse(response.body)
        parsed_json
      end
    end

    # GET request with custom api key
    #
    # @param x_endpoint_header [String]
    # @param request_options [SeedAuthEnvironmentVariablesClient::RequestOptions]
    # @return [String]
    def get_with_header(x_endpoint_header:, request_options: nil)
      Async do
        response = @request_client.conn.get do |req|
          req.options.timeout = request_options.timeout_in_seconds unless request_options&.timeout_in_seconds.nil?
          req.headers["X-FERN-API-KEY"] = request_options.api_key unless request_options&.api_key.nil?
          unless request_options&.x_another_header.nil?
            req.headers["X-Another-Header"] =
              request_options.x_another_header
          end
          req.headers = {
            **req.headers,
            **(request_options&.additional_headers || {}),
            "X-Endpoint-Header": x_endpoint_header
          }.compact
          req.url "#{@request_client.get_url(request_options: request_options)}/apiKeyInHeader"
        end
        parsed_json = JSON.parse(response.body)
        parsed_json
      end
    end
  end
end