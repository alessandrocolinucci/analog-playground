import { defineEventHandler } from 'h3';
import users from './../../database/users.json';

export default defineEventHandler(() => users);
