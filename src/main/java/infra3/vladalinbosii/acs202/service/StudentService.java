package infra3.vladalinbosii.acs202.service;

import infra3.vladalinbosii.acs202.domain.Student;
import java.util.List;

public interface StudentService {
    List<Student> getAllStudents();
    Student saveStudent(Student student);
}

