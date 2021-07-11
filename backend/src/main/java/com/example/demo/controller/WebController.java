package com.example.demo.controller;

import com.example.demo.model.Request;
import com.example.demo.model.Respones;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

@Slf4j
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/get")
public class WebController {
    HttpHeaders headers = new HttpHeaders();
    @PostMapping("/Data")
    public Respones getData(@RequestBody Request request){
        final String uri = "https://data.tmd.go.th/nwpapi/v1/forecast/location/daily/region?region="+request.getRegion()+"&duration=7";
        String token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjQ2ZWQ5MDdkYzc2ZGJiOWQ1MTU1ZTYzYzU3OTBhZmM2MjFjMTNjOWRlZTEzMzM5OThkZWI2MDMyMjllZTk3Mzk1NDQzZTY5MWU1ZTMwOGQzIn0.eyJhdWQiOiIyIiwianRpIjoiNDZlZDkwN2RjNzZkYmI5ZDUxNTVlNjNjNTc5MGFmYzYyMWMxM2M5ZGVlMTMzMzk5OGRlYjYwMzIyOWVlOTczOTU0NDNlNjkxZTVlMzA4ZDMiLCJpYXQiOjE2MjU0Nzg5NTUsIm5iZiI6MTYyNTQ3ODk1NSwiZXhwIjoxNjU3MDE0OTU1LCJzdWIiOiIxNTE3Iiwic2NvcGVzIjpbXX0.cvgFgKJqdSv2H7QQrRqlnrWKYUT-LcqsnDNoJVTd7cEM7fW2Vbw5E3tSUInm1J6hLT-HLVcVDQIG1zz1owWmbs6dKzdDKPsuOhDWGyhNhbXTUv6MHQIuFHF0M1N-MR64IQiCVRUUCBP2rOrC3XmHpNxupaVp5hxx2DYLvWe1MA1NsDN-2DT-zyBJeZqAhYa_4Hj3Il4i9Nx445zfr_CAgsFpc0mwh-zbOJyguSeKEYdv830TJC6d5By3RVCwokfOsO6PTXPcxbzF2B8HlSy9X7BTHX7l-W1G0a0b_ERGPtDZ2OwTKMxG0RtkfVMhbHqHe3fSth3BzUivTWoKxb7V0r1AkOAiRq7dgjzkR_0sJ5wdEYggpqSjleV_tk_mSIaOXuaCjs9EM27-ej4ghGR_mgB4mzT56JraDHa8j5vGEmKIq-exiiXrDLw5UtI6pSiETEplQEwkocJtomZHZHFgwz176AAB8mFQJR_eruSkQDTnrzhIDaofhE5ouBnLc8u2KBiGyd_2irxcrX0c0xuIIT0z5CAdOlslHaEM1rM87GrrY5HqmOwAeUkvoHs88fkb8VDb0H4p6rVBnM4UG9Cg_QBQ141nyo9a-OuJaS_zWH0CHN0ZAnG3W6b8cR7qADotYQhuu7oTVRl5CDyMedXr1n8D8QbUH2k_hskiKSXlt8s";
        headers.set("Authorization", "Bearer " + token);
        HttpEntity requestEntity = new HttpEntity<>(headers);
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<Respones> result = restTemplate.exchange(uri, HttpMethod.GET, requestEntity, Respones.class);
        log.info("test{}: ",result.getBody());
        return result.getBody();

    }
}
