package com.baha.dev.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.baha.dev.entities.Projet;
@RepositoryRestResource(path = "gn")
@CrossOrigin("http://localhost:4200/") 
public interface ProjetRepository extends JpaRepository<Projet, Long>{
	@Override
	public void run(String... args) throws Exception {
	repositoryRestConfiguration.exposeIdsFor(Produit.class,Categorie.class);
	}


}
