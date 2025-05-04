package com.furia.know_your_fan.service;

import com.furia.know_your_fan.model.Fan;
import com.furia.know_your_fan.repository.FanRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Service
public class FanService {

    private final FanRepository fanRepository;

    public FanService(FanRepository fanRepository) {
        this.fanRepository = fanRepository;
    }


    public Fan salvar(Fan fan) {
        return fanRepository.save(fan);
    }

    public String salvarDocumento(Long id, MultipartFile file) {
        try {
            String folder = "uploads/";
            Files.createDirectories(Paths.get(folder));
            String filePath = folder + id + "_" + file.getOriginalFilename();
            Path path = Paths.get(filePath);
            Files.write(path, file.getBytes());

            Fan fan = fanRepository.findById(id).orElseThrow();
            fan.setDocumentoPath(filePath);
            fanRepository.save(fan);

            return filePath;
        } catch (IOException e) {
            throw new RuntimeException("Erro ao salvar documento", e);
        }
    }
}
