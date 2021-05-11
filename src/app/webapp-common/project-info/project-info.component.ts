import {Component, HostListener, OnDestroy, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Store} from '@ngrx/store';
import 'ace-builds/src-noconflict/ace';
import 'ace-builds/webpack-resolver';
import {Observable} from 'rxjs/internal/Observable';
import {Subscription} from 'rxjs';
import {filter} from 'rxjs/operators';
import {MarkdownEditorComponent} from 'ngx-markdown-editor';
import 'ngx-markdown-editor';
import {RootProjects, selectSelectedProject} from '../core/reducers/projects.reducer';
import {UpdateProject} from '../core/actions/projects.actions';
import {Project} from '../../business-logic/model/projects/project';

const BREAK_POINT = 990;

@Component({
  selector: 'sm-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.scss']
})
export class ProjectInfoComponent implements OnInit, OnDestroy {
  private selecteProject$: Observable<Project>;
  private originalInfo: string;
  private infoSubs: Subscription;
  public info: string;
  public editMode: boolean;
  public options = {
    markedjsOpt: {
      sanitize: true
    },
    usingFontAwesome5: true,
    showPreviewPanel: true,
    resizable: false,
    hideIcons: ['TogglePreview', 'FullScreen']
  };
  public loading: boolean;
  public editorVisible: boolean;
  private preview: Element;
  private editor: Element;
  public isDirty: boolean;
  private projectId: string;

  @ViewChild('editorComponent', {static: false}) editorComponent: MarkdownEditorComponent;

  @HostListener('window:resize', ['$event'])
  updateEditorVisibility() {
    if (window.innerWidth > BREAK_POINT) {
      if (this.editMode) {
        this.renderer.setStyle(this.preview, 'display', 'block');
        this.renderer.setStyle(this.editor, 'display', 'block');
      } else {
        this.renderer.setStyle(this.preview, 'display', 'block');
        this.renderer.setStyle(this.editor, 'display', 'none');
      }
    } else if (this.editMode) {
      this.renderer.setStyle(this.preview, 'display', 'none');
      this.renderer.setStyle(this.editor, 'display', 'block');
    } else {
      this.renderer.setStyle(this.preview, 'display', 'block');
      this.renderer.setStyle(this.editor, 'display', 'none');
    }
  }

  constructor(private store: Store<RootProjects>, private renderer: Renderer2) {
    this.selecteProject$ = this.store.select(selectSelectedProject);
  }

  ngOnInit(): void {
    this.loading = true;
    this.infoSubs = this.selecteProject$.pipe(filter(project => project?.description !== undefined)).subscribe(project => {
      this.info = project.description;
      this.projectId = project.id;
      this.loading = false;
    });
  }

  ngOnDestroy() {
    this.infoSubs.unsubscribe();
  }

  saveInfo() {
    this.store.dispatch(new UpdateProject({id: this.projectId, changes: {description: this.info}}));
    this.editMode = false;
    this.isDirty = false;
    this.updateEditorVisibility();
  }

  editClicked() {
    this.originalInfo = this.info;
    this.editMode = true;
    this.editorVisible = false;
    setTimeout( () => this.updateEditorVisibility());
  }

  cancelClicked() {
    this.info = this.originalInfo;
    this.editMode = false;
    this.isDirty = false;
    this.updateEditorVisibility();
  }

  editorReady() {
    this.preview = document.querySelector('.preview-container');
    this.editor = document.querySelector('.editor-container > div:first-child');
  }

  togglePreview() {
    this.renderer.setStyle(this.preview, 'display', this.editorVisible ? 'none' : 'block');
    this.renderer.setStyle(this.editor, 'display', !this.editorVisible ? 'none' : 'block');
    this.editorVisible = !this.editorVisible;
  }

  checkDirty() {
    this.isDirty = this.originalInfo !== this.info;
  }
}
