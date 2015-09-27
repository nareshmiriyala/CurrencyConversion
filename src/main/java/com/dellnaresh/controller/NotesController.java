/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dellnaresh.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.dellnaresh.resources.Note;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 *
 * @author NARESHM
 */
@RestController
public class NotesController {

    @RequestMapping(method = RequestMethod.GET, value = "/notes")
    public Note getNotes() {
        return new Note(1, "Note1", "Context");
    }

    @RequestMapping(method = RequestMethod.POST, value = "/addnotes",
            consumes = {"application/json", "application/xml"},
            produces = {"application/json", "application/xml"})
    public void addNote(@RequestBody Note note) {
        System.out.println("notes value:" + note);
    }
}
