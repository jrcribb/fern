/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.api.types;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.annotation.Nulls;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.seed.api.core.ObjectMappers;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;
import org.jetbrains.annotations.NotNull;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
@JsonDeserialize(builder = ScoredColumn.Builder.class)
public final class ScoredColumn {
    private final String id;

    private final Optional<Float> score;

    private final Optional<List<Float>> values;

    private final Optional<Metadata> metadata;

    private final Optional<IndexedData> indexedData;

    private final Map<String, Object> additionalProperties;

    private ScoredColumn(
            String id,
            Optional<Float> score,
            Optional<List<Float>> values,
            Optional<Metadata> metadata,
            Optional<IndexedData> indexedData,
            Map<String, Object> additionalProperties) {
        this.id = id;
        this.score = score;
        this.values = values;
        this.metadata = metadata;
        this.indexedData = indexedData;
        this.additionalProperties = additionalProperties;
    }

    @JsonProperty("id")
    public String getId() {
        return id;
    }

    @JsonProperty("score")
    public Optional<Float> getScore() {
        return score;
    }

    @JsonProperty("values")
    public Optional<List<Float>> getValues() {
        return values;
    }

    @JsonProperty("metadata")
    public Optional<Metadata> getMetadata() {
        return metadata;
    }

    @JsonProperty("indexedData")
    public Optional<IndexedData> getIndexedData() {
        return indexedData;
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof ScoredColumn && equalTo((ScoredColumn) other);
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    private boolean equalTo(ScoredColumn other) {
        return id.equals(other.id)
                && score.equals(other.score)
                && values.equals(other.values)
                && metadata.equals(other.metadata)
                && indexedData.equals(other.indexedData);
    }

    @java.lang.Override
    public int hashCode() {
        return Objects.hash(this.id, this.score, this.values, this.metadata, this.indexedData);
    }

    @java.lang.Override
    public String toString() {
        return ObjectMappers.stringify(this);
    }

    public static IdStage builder() {
        return new Builder();
    }

    public interface IdStage {
        _FinalStage id(@NotNull String id);

        Builder from(ScoredColumn other);
    }

    public interface _FinalStage {
        ScoredColumn build();

        _FinalStage score(Optional<Float> score);

        _FinalStage score(Float score);

        _FinalStage values(Optional<List<Float>> values);

        _FinalStage values(List<Float> values);

        _FinalStage metadata(Optional<Metadata> metadata);

        _FinalStage metadata(Metadata metadata);

        _FinalStage indexedData(Optional<IndexedData> indexedData);

        _FinalStage indexedData(IndexedData indexedData);
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder implements IdStage, _FinalStage {
        private String id;

        private Optional<IndexedData> indexedData = Optional.empty();

        private Optional<Metadata> metadata = Optional.empty();

        private Optional<List<Float>> values = Optional.empty();

        private Optional<Float> score = Optional.empty();

        @JsonAnySetter
        private Map<String, Object> additionalProperties = new HashMap<>();

        private Builder() {}

        @java.lang.Override
        public Builder from(ScoredColumn other) {
            id(other.getId());
            score(other.getScore());
            values(other.getValues());
            metadata(other.getMetadata());
            indexedData(other.getIndexedData());
            return this;
        }

        @java.lang.Override
        @JsonSetter("id")
        public _FinalStage id(@NotNull String id) {
            this.id = Objects.requireNonNull(id, "id must not be null");
            return this;
        }

        @java.lang.Override
        public _FinalStage indexedData(IndexedData indexedData) {
            this.indexedData = Optional.ofNullable(indexedData);
            return this;
        }

        @java.lang.Override
        @JsonSetter(value = "indexedData", nulls = Nulls.SKIP)
        public _FinalStage indexedData(Optional<IndexedData> indexedData) {
            this.indexedData = indexedData;
            return this;
        }

        @java.lang.Override
        public _FinalStage metadata(Metadata metadata) {
            this.metadata = Optional.ofNullable(metadata);
            return this;
        }

        @java.lang.Override
        @JsonSetter(value = "metadata", nulls = Nulls.SKIP)
        public _FinalStage metadata(Optional<Metadata> metadata) {
            this.metadata = metadata;
            return this;
        }

        @java.lang.Override
        public _FinalStage values(List<Float> values) {
            this.values = Optional.ofNullable(values);
            return this;
        }

        @java.lang.Override
        @JsonSetter(value = "values", nulls = Nulls.SKIP)
        public _FinalStage values(Optional<List<Float>> values) {
            this.values = values;
            return this;
        }

        @java.lang.Override
        public _FinalStage score(Float score) {
            this.score = Optional.ofNullable(score);
            return this;
        }

        @java.lang.Override
        @JsonSetter(value = "score", nulls = Nulls.SKIP)
        public _FinalStage score(Optional<Float> score) {
            this.score = score;
            return this;
        }

        @java.lang.Override
        public ScoredColumn build() {
            return new ScoredColumn(id, score, values, metadata, indexedData, additionalProperties);
        }
    }
}
