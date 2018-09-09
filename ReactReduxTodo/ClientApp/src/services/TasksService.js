﻿const ENDPOINT = 'api/Tasks';

class TasksService {
    async getTasksAsync() {
        const url = `${ENDPOINT}`;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error(`TasksService.getTasksAsync failed, HTTP status ${response.status}`);
        }
        const data = await response.json();
        return data;
    }

    async addTaskAsync(taskDescription) {
        const url = `${ENDPOINT}`;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ description: taskDescription })
        });
        if (!response.ok) {
            throw new Error(`TasksService.addTaskAsync failed, HTTP status ${response.status}`);
        }
        const data = await response.text();
        return data;
    }

    async deleteTaskAsync(taskId) {
        const url = `${ENDPOINT}`;
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: taskId
        });
        if (!response.ok) {
            throw new Error(`TasksService.deleteTaskAsync failed, HTTP status ${response.status}`);
        }
    }
}

export const tasksService = new TasksService();