package infra3.vladalinbosii.acs202.service;

import infra3.vladalinbosii.acs202.domain.Student;
import infra3.vladalinbosii.acs202.repository.StudentRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class StudentServiceImpl implements StudentService {
    private final StudentRepository repository;
    public StudentServiceImpl(StudentRepository repository) {
        this.repository = repository;
    }
    @Override
    public List<Student> getAllStudents() {
        return repository.findAll();
    }
    @Override
    public Student saveStudent(Student student) {
        return repository.save(student);
    }
}

