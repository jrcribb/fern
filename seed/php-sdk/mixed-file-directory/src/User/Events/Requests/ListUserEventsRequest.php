<?php

namespace Seed\User\Events\Requests;

use Seed\Core\SerializableType;

class ListUserEventsRequest extends SerializableType
{
    /**
     * @var ?int $limit The maximum number of results to return.
     */
    public ?int $limit;

    /**
     * @param array{
     *   limit?: ?int,
     * } $values
     */
    public function __construct(
        array $values = [],
    ) {
        $this->limit = $values['limit'] ?? null;
    }
}
