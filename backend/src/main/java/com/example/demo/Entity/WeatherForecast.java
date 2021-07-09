package com.example.demo.Entity;

import java.util.List;

@lombok.Data
public class WeatherForecast {
    private Location location;
    private List<Forecast> forecasts;
}
