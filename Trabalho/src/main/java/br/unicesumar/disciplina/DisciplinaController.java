package br.unicesumar.disciplina;


import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.Query;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/disciplinas")
@Transactional
public class DisciplinaController {
    
    @Autowired
    private EntityManager em;
    
    @RequestMapping(method = RequestMethod.GET)
    public List<Disciplina> getDisciplinas(){
        Query pesquisa = em.createQuery("select id, nome, cargahoraria,peso from disciplinas");
        return pesquisa.getResultList();
    }
    
    @RequestMapping(method = RequestMethod.POST)
    public void incluirDisciplina(@RequestBody Disciplina disciplina){
        em.persist(disciplina);
    }
    
    @RequestMapping(method = RequestMethod.DELETE)
    public void excluirDisciplina(@PathVariable Long id){
        em.createQuery("delete from disciplina d where d.id = :id").setParameter("id", id).executeUpdate();
    }
    
}
