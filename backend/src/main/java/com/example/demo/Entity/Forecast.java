package com.example.demo.Entity;

import java.time.OffsetDateTime;

@lombok.Data
public class Forecast {
    private OffsetDateTime time;
    private Data data;
}
