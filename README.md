Simple Express Practice

--Routes:
    -- Ping
        GET `/ping/`
            returns "pong"
    -- Chuck
        GET `/chuck/`
            returns Random Chuck Norris Joke
    -- Math
        GET `math/count`
            returns Route traffic count
        DELETE `math/count`
            resets Route traffic count 
            returns reset confirmation
        POST `/math/sum`
            returns (single Num query) + 7
        POST `/math/subtract`
            returns (single Num query) - 7