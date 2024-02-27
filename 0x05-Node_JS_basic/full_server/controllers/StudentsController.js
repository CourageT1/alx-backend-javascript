// full_server/controllers/StudentsController.js

import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const students = await readDatabase(process.argv[2]);
      res.status(200).send('This is the list of our students\n' + 
        Object.entries(students)
          .sort((a, b) => a[0].localeCompare(b[0]))
          .map(([field, names]) => `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`)
          .join('\n'));
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }
    try {
      const students = await readDatabase(process.argv[2]);
      res.status(200).send(`List: ${students[major].join(', ')}`);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}

export default StudentsController;
