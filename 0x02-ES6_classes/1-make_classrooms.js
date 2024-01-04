// 1-initializeRooms.js
import ClassRoom from './0-classroom.js';

export default function initializeRooms() {
  const roomSizes = [19, 20, 34];
  const classrooms = [];

  for (const size of roomSizes) {
    const classroom = new ClassRoom(size);
    classrooms.push(classroom);
  }

  return classrooms;
}
