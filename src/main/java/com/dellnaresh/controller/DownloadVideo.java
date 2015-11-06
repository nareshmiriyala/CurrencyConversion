package com.dellnaresh.controller;

import com.dellnaresh.resources.Rate;
import com.youtube.downloader.util.Utility;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by nareshm on 3/11/2015.
 */
@RestController
public class DownloadVideo {
    private Logger logger= LoggerFactory.getLogger(DownloadVideo.class);
    @RequestMapping(method = RequestMethod.POST, value = "/downloadVideo",consumes = {"application/json", "application/xml"})
    public void downloadVideo(@RequestBody String videoUrl) {
        Utility.downloadVideo(videoUrl);
    }
}
