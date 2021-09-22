(function() {
  const fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      const force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      const element = document.getElementById("2d8712d7-5682-4712-91fa-d60a5112813c");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '2d8712d7-5682-4712-91fa-d60a5112813c' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error(url) {
          console.error("failed to load " + url);
        }
    
        for (let i = 0; i < css_urls.length; i++) {
          const url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (let i = 0; i < js_urls.length; i++) {
          const url = js_urls[i];
          const element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      const js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.4.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.4.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.4.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.4.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-mathjax-2.4.0.min.js"];
      const css_urls = [];
      
    
      const inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            const fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  const docs_json = '{"aad22979-2e1e-40e2-beb5-7cded5c69284":{"defs":[],"roots":{"references":[{"attributes":{},"id":"21058","type":"ResetTool"},{"attributes":{"tools":[{"id":"21058"},{"id":"21059"},{"id":"21060"},{"id":"21061"},{"id":"21062"},{"id":"21063"},{"id":"21064"},{"id":"21065"}]},"id":"21068","type":"Toolbar"},{"attributes":{},"id":"21051","type":"BasicTicker"},{"attributes":{},"id":"21098","type":"UnionRenderers"},{"attributes":{"toolbar":{"id":"21106"},"toolbar_location":"above"},"id":"21107","type":"ToolbarBox"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"21067","type":"PolyAnnotation"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21080","type":"Circle"},{"attributes":{"children":[[{"id":"21041"},0,0]]},"id":"21105","type":"GridBox"},{"attributes":{"overlay":{"id":"21067"}},"id":"21062","type":"LassoSelectTool"},{"attributes":{},"id":"21044","type":"DataRange1d"},{"attributes":{"axis":{"id":"21050"},"coordinates":null,"group":null,"ticker":null},"id":"21053","type":"Grid"},{"attributes":{},"id":"21061","type":"WheelZoomTool"},{"attributes":{"coordinates":null,"group":null,"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"21088","type":"Span"},{"attributes":{"axis":{"id":"21054"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"21057","type":"Grid"},{"attributes":{},"id":"21100","type":"UnionRenderers"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAAACamZmZmZmpP5qZmZmZmbk/NDMzMzMzwz+amZmZmZnJPwAAAAAAANA/NDMzMzMz0z9nZmZmZmbWP5qZmZmZmdk/zczMzMzM3D8AAAAAAADgP5qZmZmZmeE/NDMzMzMz4z/NzMzMzMzkP2dmZmZmZuY/AAAAAAAA6D+amZmZmZnpPzQzMzMzM+s/zczMzMzM7D9nZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"PSWUrfrllUC6ZTfE07ObQIHSxpixD6BAXutlA2Fon0AWemawUmmdQBJdptJ4v59A48F0NdPPm0BhLg6FQP6cQNT8SMHKBJ1AN/hQuCybnECYCNGlG7+ZQOL2UqcslZtAhDgC8IHHmkDe0e+ORHOcQJp7JDyiB6BAxVCwvOY1n0BSmX0dHQ6gQFTe5JuCLJtAHVMIAw/Em0COFXr8JyGYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"21099"},"selection_policy":{"id":"21098"}},"id":"21077","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"21066","type":"BoxAnnotation"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"21083","type":"Scatter"},{"attributes":{"data":{"rug_x":{"__ndarray__":"u/QnuP7V5z9SIsxa1SLgPw==","dtype":"float64","order":"little","shape":[2]},"rug_y":{"__ndarray__":"nB0+wbWyacCcHT7BtbJpwA==","dtype":"float64","order":"little","shape":[2]}},"selected":{"id":"21101"},"selection_policy":{"id":"21100"}},"id":"21084","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"21050"}],"center":[{"id":"21053"},{"id":"21057"}],"height":500,"left":[{"id":"21054"}],"output_backend":"webgl","renderers":[{"id":"21081"},{"id":"21085"},{"id":"21087"},{"id":"21088"}],"title":{"id":"21089"},"toolbar":{"id":"21068"},"toolbar_location":null,"width":500,"x_range":{"id":"21042"},"x_scale":{"id":"21046"},"y_range":{"id":"21044"},"y_scale":{"id":"21048"}},"id":"21041","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"21059","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21079","type":"Circle"},{"attributes":{},"id":"21096","type":"BasicTickFormatter"},{"attributes":{},"id":"21093","type":"BasicTickFormatter"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.7,"line_width":1.5,"location":0},"id":"21087","type":"Span"},{"attributes":{},"id":"21094","type":"AllLabels"},{"attributes":{},"id":"21064","type":"SaveTool"},{"attributes":{"coordinates":null,"data_source":{"id":"21084"},"glyph":{"id":"21083"},"group":null,"hover_glyph":null,"view":{"id":"21086"}},"id":"21085","type":"GlyphRenderer"},{"attributes":{},"id":"21099","type":"Selection"},{"attributes":{"children":[{"id":"21107"},{"id":"21105"}]},"id":"21108","type":"Column"},{"attributes":{},"id":"21042","type":"DataRange1d"},{"attributes":{"toolbars":[{"id":"21068"}],"tools":[{"id":"21058"},{"id":"21059"},{"id":"21060"},{"id":"21061"},{"id":"21062"},{"id":"21063"},{"id":"21064"},{"id":"21065"}]},"id":"21106","type":"ProxyToolbar"},{"attributes":{"axis_label":"Quantile","coordinates":null,"formatter":{"id":"21096"},"group":null,"major_label_policy":{"id":"21097"},"ticker":{"id":"21051"}},"id":"21050","type":"LinearAxis"},{"attributes":{},"id":"21101","type":"Selection"},{"attributes":{"overlay":{"id":"21066"}},"id":"21060","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"21065","type":"HoverTool"},{"attributes":{},"id":"21063","type":"UndoTool"},{"attributes":{"coordinates":null,"group":null,"text":"mu"},"id":"21089","type":"Title"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21078","type":"Circle"},{"attributes":{"axis_label":"ESS for small intervals","coordinates":null,"formatter":{"id":"21093"},"group":null,"major_label_policy":{"id":"21094"},"ticker":{"id":"21055"}},"id":"21054","type":"LinearAxis"},{"attributes":{"source":{"id":"21084"}},"id":"21086","type":"CDSView"},{"attributes":{},"id":"21046","type":"LinearScale"},{"attributes":{},"id":"21048","type":"LinearScale"},{"attributes":{"source":{"id":"21077"}},"id":"21082","type":"CDSView"},{"attributes":{},"id":"21097","type":"AllLabels"},{"attributes":{"coordinates":null,"data_source":{"id":"21077"},"glyph":{"id":"21078"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21080"},"nonselection_glyph":{"id":"21079"},"view":{"id":"21082"}},"id":"21081","type":"GlyphRenderer"},{"attributes":{},"id":"21055","type":"BasicTicker"}],"root_ids":["21108"]},"title":"Bokeh Application","version":"2.4.0"}}';
                  const render_items = [{"docid":"aad22979-2e1e-40e2-beb5-7cded5c69284","root_ids":["21108"],"roots":{"21108":"2d8712d7-5682-4712-91fa-d60a5112813c"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    let attempts = 0;
                    const timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (let i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();