package com.baha.dev.restcontrollers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.baha.dev.entities.Projet;
import com.baha.dev.repos.ProjetRepository;
import com.baha.dev.service.DevService;

@RestController
@RequestMapping("/api/gn")
@CrossOrigin("*")

public class ProjetRESTController {
	@Autowired
	ProjetRepository projettRepository;
	@RequestMapping(method=RequestMethod.GET)
	public List<Projet> getAllCategories()
	{
	return projettRepository.findAll();
	}
	@RequestMapping(value="/{id}",method = RequestMethod.GET)
	public Projet getCategorieById(@PathVariable("id") Long id) {
	return projettRepository.findById(id).get();
	}
	@RequestMapping(value="/prodsByName/{nom}",method = RequestMethod.GET)
	public List<Projet> findByNomDevContains(@PathVariable("nom") String nom) {
	return DevService.findByNomDevContains(nom);
	}

}
