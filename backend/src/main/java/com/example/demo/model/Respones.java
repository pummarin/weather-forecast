package com.example.demo.model;

import com.example.demo.Entity.WeatherForecast;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.List;

@Data
public class Respones {
    @JsonProperty("WeatherForecasts")
    List<WeatherForecast> weatherForecast;
}
