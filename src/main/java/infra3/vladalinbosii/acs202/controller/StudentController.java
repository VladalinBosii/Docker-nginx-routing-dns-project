package infra3.vladalinbosii.acs202.controller;

import infra3.vladalinbosii.acs202.domain.Student;
import infra3.vladalinbosii.acs202.service.StudentService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/students")
public class StudentController {
    private final StudentService service;
    public StudentController(StudentService service) {
        this.service = service;
    }
    @GetMapping
    public List<Student> getAllStudents() {
        return service.getAllStudents();
    }
    @PostMapping
    public Student createStudent(@RequestBody Student student) {
        return service.saveStudent(student);
    }
}

