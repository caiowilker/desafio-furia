    package com.furia.know_your_fan.service;

    import org.springframework.stereotype.Service;
    import java.util.List;
    import java.util.Map;

    @Service
    public class SocialMediaService {

        public Map<String, Object> analisarRedesSociais(String twitterHandle, String instagramHandle) {
            return Map.of(
                "twitter", Map.of("handle", twitterHandle, "seguindoFuria", true, "interacoes", List.of("comentou jogo", "curtiu vitória")),
                "instagram", Map.of("handle", instagramHandle, "seguindoFuria", true, "interacoes", List.of("compartilhou post", "curtiu story"))
            );
        }
    }
