package com.furia.know_your_fan.service;

import org.springframework.stereotype.Service;

@Service
public class IAValidatorService {

    public boolean validarConteudoPerfil(String conteudoExtraido) {
        return conteudoExtraido.toLowerCase().contains("furia") || conteudoExtraido.toLowerCase().contains("esports");
    }
}
