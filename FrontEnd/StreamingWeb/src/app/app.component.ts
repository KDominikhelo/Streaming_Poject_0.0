
import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { VideoRecordingService } from './video-recording.service';
import { AuthService } from './auth-service';


type RecordingState = 'NONE' | 'RECORDING' | 'RECORDED';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {


  @ViewChild('videoElement') videoElement: any;
  title = 'StreamingWeb';
  videoBlobUrl: any = null;
  video: any;
  state: RecordingState = 'NONE';
  public isLoggedIn!: boolean;  

  constructor(
    private videoRecordingService: VideoRecordingService,
    private ref: ChangeDetectorRef,
    private sanitizer: DomSanitizer,
    private authService: AuthService


  ) {
    this.videoRecordingService.getMediaStream().subscribe((data) => {
      this.video.srcObject = data;
      this.ref.detectChanges();
    });
    this.videoRecordingService.getBlob().subscribe((data) => {
      this.videoBlobUrl = this.sanitizer.bypassSecurityTrustUrl(data);
      this.video.srcObject = null;
      this.ref.detectChanges();
    });
  }

  ngAfterViewInit(): void {
    this.video = this.videoElement.nativeElement;
  }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.getIsloggedIn();

    this.authService.loginChangeEvent.subscribe(res=>{
      this.isLoggedIn = res;
    })
  }

  startRecording() {
    this.videoRecordingService.startRecording();
    this.state = 'RECORDING';
  }

  stopRecording() {
    this.videoRecordingService.stopRecording();
    this.state = 'RECORDED';
  }

  downloadRecording() {
    this.videoRecordingService.downloadRecording();
  }

  clearRecording() {
    this.videoRecordingService.clearRecording();
    this.video.srcObject = null;
    this.videoBlobUrl = null;
    this.state = 'NONE';
  }
}