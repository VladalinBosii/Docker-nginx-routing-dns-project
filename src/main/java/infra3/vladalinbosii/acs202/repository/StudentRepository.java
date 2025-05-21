package infra3.vladalinbosii.acs202.repository;

import infra3.vladalinbosii.acs202.domain.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long> {}
