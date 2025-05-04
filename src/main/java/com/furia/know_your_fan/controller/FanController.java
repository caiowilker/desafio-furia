package com.furia.know_your_fan.controller;

import com.furia.know_your_fan.model.Fan;
import com.furia.know_your_fan.service.FanService;
import com.furia.know_your_fan.service.IAValidatorService;
import com.furia.know_your_fan.service.SocialMediaService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Map;

@RestController
@RequestMapping("/api/fans")
@CrossOrigin(origins = "http://localhost:3000")
public class FanController {

    private final FanService fanService;
    private final SocialMediaService socialMediaService;
    private final IAValidatorService iaValidatorService;

    public FanController(FanService fanService, SocialMediaService socialMediaService, IAValidatorService iaValidatorService) {
        this.fanService = fanService;
        this.socialMediaService = socialMediaService;
        this.iaValidatorService = iaValidatorService;
    }

    @PostMapping("/fans")
    public ResponseEntity<Fan> cadastrarFan(@RequestBody Fan fan) {
        return ResponseEntity.ok(fanService.salvar(fan));
    }

    @PostMapping("/documento/{id}")
    public ResponseEntity<String> uploadDocumento(@PathVariable Long id, @RequestParam("file") MultipartFile file) {
        String path = fanService.salvarDocumento(id, file);
        return ResponseEntity.ok("Documento salvo em: " + path);
    }

    @GetMapping("/test-cors")
    public String testCors() {
        return "CORS funcionando corretamente!";
    }

    @GetMapping("/analise-social")
    public ResponseEntity<?> analisarRedesSociais(@RequestParam String twitter, @RequestParam String instagram) {
        return ResponseEntity.ok(socialMediaService.analisarRedesSociais(twitter, instagram));
    }

    @PostMapping("/validar-perfil")
    public ResponseEntity<?> validarPerfil(@RequestBody String conteudo) {
        boolean valido = iaValidatorService.validarConteudoPerfil(conteudo);
        return ResponseEntity.ok(Map.of("valido", valido));
    }
}
